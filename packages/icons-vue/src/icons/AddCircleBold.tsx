// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AddCircleBoldSvg from '@ant-design/icons-svg/lib/asn/AddCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AddCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AddCircleBold: AddCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddCircleBoldSvg}></AntdIcon>;
};

AddCircleBold.displayName = 'AddCircleBold';
AddCircleBold.inheritAttrs = false;
export default AddCircleBold;