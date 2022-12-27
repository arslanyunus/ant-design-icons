// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AdditemLinearSvg from '@ant-design/icons-svg/lib/asn/AdditemLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AdditemLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AdditemLinear: AdditemLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AdditemLinearSvg}></AntdIcon>;
};

AdditemLinear.displayName = 'AdditemLinear';
AdditemLinear.inheritAttrs = false;
export default AdditemLinear;