// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AddSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/AddSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AddSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AddSquareOutline: AddSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddSquareOutlineSvg}></AntdIcon>;
};

AddSquareOutline.displayName = 'AddSquareOutline';
AddSquareOutline.inheritAttrs = false;
export default AddSquareOutline;