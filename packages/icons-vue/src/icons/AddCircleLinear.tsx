// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AddCircleLinearSvg from '@ant-design/icons-svg/lib/asn/AddCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AddCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AddCircleLinear: AddCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddCircleLinearSvg}></AntdIcon>;
};

AddCircleLinear.displayName = 'AddCircleLinear';
AddCircleLinear.inheritAttrs = false;
export default AddCircleLinear;