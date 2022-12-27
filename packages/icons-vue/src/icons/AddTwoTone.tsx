// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AddTwoToneSvg from '@ant-design/icons-svg/lib/asn/AddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AddTwoTone: AddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddTwoToneSvg}></AntdIcon>;
};

AddTwoTone.displayName = 'AddTwoTone';
AddTwoTone.inheritAttrs = false;
export default AddTwoTone;