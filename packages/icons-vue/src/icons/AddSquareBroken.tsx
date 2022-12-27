// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AddSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/AddSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AddSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AddSquareBroken: AddSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddSquareBrokenSvg}></AntdIcon>;
};

AddSquareBroken.displayName = 'AddSquareBroken';
AddSquareBroken.inheritAttrs = false;
export default AddSquareBroken;