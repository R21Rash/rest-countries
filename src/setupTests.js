import "@testing-library/jest-dom";

// Polyfill for TextEncoder
import { TextEncoder } from "util";

global.TextEncoder = TextEncoder;
