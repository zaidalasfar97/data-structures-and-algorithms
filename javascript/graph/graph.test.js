"use strict";

let Graph = require('./graph.js');

describe("Graph check", () => {

    it("should  add a new  Node", () => {
        let graph = new Graph();
        graph.AddNode(7);
        expect(graph.Size()).toBe(1);
    });


    it("should add an edge ", () => {
        let graph = new Graph();
        graph.AddNode(4);
        graph.AddNode(9);
        graph.AddEdge(4, 9, 7);
        expect(graph.GetNeighbors(4)[0].weight).toBe(7);
    });


    it("should  retrieved A collection of all nodes", () => {
        let graph = new Graph();
        graph.AddNode(8);
        graph.AddNode(10);
        expect(graph.GetNodes()).toBeDefined();
    });


    it("Should successfully retrieved All appropriate neighbors ", () => {
        let graph = new Graph();
        graph.AddNode(4);
        graph.AddNode(6);
        graph.AddEdge(4, 6, 1);
        expect(graph.GetNeighbors(4)[0].vertex).toBe(6);
    });
    it("should return weight between two neighbors nodes", () => {
        let graph = new Graph();
        graph.AddNode(8);
        graph.AddNode(2);
        graph.AddEdge(8, 2, 3);
        expect(graph.GetNeighbors(8)[0].weight).toBe(3);
    });


    it("should return the proper size ", () => {
        let graph = new Graph();
        graph.AddNode(2);
        graph.AddNode(3);
        graph.AddEdge(2, 3);
        expect(graph.Size()).toEqual(2);
    });


    it("should return the graph with one node and one edge", () => {
        let graph = new Graph();
        graph.AddNode(5);
        graph.AddEdge(5, 5, 2);
        expect(graph.Size()).toEqual(1);
    });


    it("should return null when the graph is empty", () => {
        let graph = new Graph();
        expect(graph.Size()).toBe(0);
    });
});