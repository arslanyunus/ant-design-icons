// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AddSquareBoldSvg from '@ant-design/icons-svg/lib/asn/AddSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AddSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AddSquareBold: AddSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddSquareBoldSvg}></AntdIcon>;
};

AddSquareBold.displayName = 'AddSquareBold';
AddSquareBold.inheritAttrs = false;
export default AddSquareBold;