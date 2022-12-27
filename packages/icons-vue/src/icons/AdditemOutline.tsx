// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AdditemOutlineSvg from '@ant-design/icons-svg/lib/asn/AdditemOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AdditemOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AdditemOutline: AdditemOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AdditemOutlineSvg}></AntdIcon>;
};

AdditemOutline.displayName = 'AdditemOutline';
AdditemOutline.inheritAttrs = false;
export default AdditemOutline;