# ![origin_github_banner](https://user-images.githubusercontent.com/673455/37314301-f8db9a90-2618-11e8-8fee-b44f38febf38.png)

# Origin Tracer

![Tracer Screenshot](https://user-images.githubusercontent.com/837/65888615-d2dab600-e36d-11e9-82b6-97448b639acf.png)

Origin Tracer provides a visual way to debug and understand the actual execution flow of a given ethereum transaction. 

It's a great way to: 

- Visualize the flow of a transaction across many contracts.
- Debug what went wrong with your transaction.
- Get a feel for what bytecodes in a transaction affect gas prices.
- Learn how the Ethereum virtual machine actually works under the hood.
- Understand what the solidity compiler generates.


## Using

We'll bring it up on it's own domain very soon! For now, download, `npm install --only=dev`,  `npm run start`, and go to http://localhost:9001/.

Origin Make Offer (proxied)
http://localhost:9001/#0xe2f935e6b55a64d9550b664221103d3714137af569dc9f2f494c81261a75f094

Weird and funky
http://localhost:9001/#0x4ca8ea2e822c2904313cad23e79a252e58f4e864332c848d9ea3908960a01d6d

Giant DIAish one
http://localhost:9001/#0x6e4e39723778155dca504fef42b44e6b9290d33b4d478486cb60170f9ab18485


## Developing

We built Origin Tracer as a quick tool to help us quickly understand failing transactions. It is released now because it is very useful as is, but it's certainly not polished. You are welcome to help make it better!

The code is a slightly idiosyncratic. The lead author, in one of his occasional revolts against modern society, made it his mission to not use a single runtime NPM library. The code is written in Typescript but there are zero runtime dependencies on anything. Everything is plain javascript.


## Wishlist

Overview:

- [ ] Add an overview section.
- [ ] Show overall gas usage.
- [ ] Show section with logs generated by a transaction. Possibly attempt to decode.
- [ ] Show any revert error messages.

Bytecode:

- [ ] Special color/shape for log bytecodes, since they are important.

Bytecode info box:

- [ ] Show the output of a bytecode.
- [ ] Label and color green each stack input that will be used by a bytecode.
- [ ] Show the data passed as input to each call.

Polish:

- [ ] Loading screen.
- [ ] Host a static transaction file, and default to loading it at startup.
- [ ] Info box needs to change location based if it's near an edge.
- [ ] Provide a way to work off a user selected RPC provider url.

Refactoring:

- [ ] Change layout engine to use operation depth, rather than manually calculating it from bytecodes. This will correctly visualize running out of gas in the middle of a call.
- [ ] html.ts should have the DOM elements it uses passed in, it should not be responsible for finding them itself.

Deploy:

- [ ] Script deploy
- [ ] Host on github pages
- [ ] Host on our own domain.
- [ ] Add license file