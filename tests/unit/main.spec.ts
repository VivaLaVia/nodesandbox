import { shallowMount } from "@vue/test-utils";
import toastr from "toastr";
import { Main } from "@/main.ts"

describe("main.js", () => {
  it("Toast is called on start", () => {

    let testVal = "Test"
    let spy = jest.spyOn(toastr, "info")
    
    Main.doSend(testVal)

    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith(testVal);
  });
});