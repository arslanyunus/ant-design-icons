// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AddSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/AddSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AddSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AddSquareTwoTone: AddSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddSquareTwoToneSvg}></AntdIcon>;
};

AddSquareTwoTone.displayName = 'AddSquareTwoTone';
AddSquareTwoTone.inheritAttrs = false;
export default AddSquareTwoTone;