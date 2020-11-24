# React Confirm box

![npm](https://img.shields.io/npm/v/react-confirm-box?style=for-the-badge) ![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/serrexlabs/react-confirm-box/Build/master?style=for-the-badge) ![NPM](https://img.shields.io/npm/l/react-confirm-box?style=for-the-badge)

A customizable and callable confirm alert react. 

## Demo

https://codesandbox.io/s/hardcore-hooks-lh6n0

## Installation

NPM
```bash
$ npm i react-confirm-box
```
YARN
```bash
$ yarn add react-confirm-box
```
Usage

This is similar to native javascript confirm alert API

```typescript jsx
import { confirm } from "react-confirm-box";
...

const onClick = async () => {
   const result = await confirm("Are you sure?");
   if (result) {
     console.log("You click yes!");
     return;
   }
   console.log("You click No!");
 };
```
Replacing default button labels

```typescript jsx
import { confirm } from "react-confirm-box";
...
const options = {
  labels: {
    confirmable: "Confirm",
    cancellable: "Cancel"
  }
}

const onClick = async () => {
   const result = await confirm("Are you sure?", options);
   if (result) {
     console.log("You click yes!");
     return;
   }
   console.log("You click No!");
 };
```


Use custom component

```typescript jsx
import { confirm } from "react-confirm-box";
...
const options = {
  render: (message, onConfirm, onCancel) => {
    return (
      <>
        <h1> Replace with {message} </h1>
        <button onClick={onConfirm}> Yes </button>
      </>
    );
  }
};


const onClick = async () => {
   const result = await confirm("Are you sure?", options);
   if (result) {
     console.log("You click yes!");
     return;
   }
   console.log("You click No!");
 };
```

Options

`labels`

With this option, can replace the default button values. 

```typescript
  labels: {
    confirmable: "Confirm",
    cancellable: "Cancel"
  }
```

`render`

With this option, can replace the content of the confirm box. This should be a callback function which accept, `messsage` as the first parameter and the second one is the function that should trigger once confirmable button clicked. Last argument is the cancellable callback 

```typescript jsx
  const options = {
    render: (message, onConfirm, onCancel) => {
      return (
        <>
          <h1> Replace with {message} </h1>
          <button onClick={onConfirm}> Yes </button>
          <button onClick={onCancel}> No </button>
        </>
      );
    }
  };

```
