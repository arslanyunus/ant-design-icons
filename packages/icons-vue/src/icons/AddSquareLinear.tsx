// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AddSquareLinearSvg from '@ant-design/icons-svg/lib/asn/AddSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AddSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AddSquareLinear: AddSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddSquareLinearSvg}></AntdIcon>;
};

AddSquareLinear.displayName = 'AddSquareLinear';
AddSquareLinear.inheritAttrs = false;
export default AddSquareLinear;