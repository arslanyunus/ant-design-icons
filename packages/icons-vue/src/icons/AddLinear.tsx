// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AddLinearSvg from '@ant-design/icons-svg/lib/asn/AddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AddLinear: AddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddLinearSvg}></AntdIcon>;
};

AddLinear.displayName = 'AddLinear';
AddLinear.inheritAttrs = false;
export default AddLinear;