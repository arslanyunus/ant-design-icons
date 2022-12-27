// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AddCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/AddCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AddCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AddCircleOutline: AddCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddCircleOutlineSvg}></AntdIcon>;
};

AddCircleOutline.displayName = 'AddCircleOutline';
AddCircleOutline.inheritAttrs = false;
export default AddCircleOutline;