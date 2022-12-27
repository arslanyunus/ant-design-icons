// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AddOutlineSvg from '@ant-design/icons-svg/lib/asn/AddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AddOutline: AddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddOutlineSvg}></AntdIcon>;
};

AddOutline.displayName = 'AddOutline';
AddOutline.inheritAttrs = false;
export default AddOutline;