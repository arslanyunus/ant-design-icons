// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AddCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/AddCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AddCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AddCircleTwoTone: AddCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddCircleTwoToneSvg}></AntdIcon>;
};

AddCircleTwoTone.displayName = 'AddCircleTwoTone';
AddCircleTwoTone.inheritAttrs = false;
export default AddCircleTwoTone;