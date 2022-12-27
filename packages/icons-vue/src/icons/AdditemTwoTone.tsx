// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AdditemTwoToneSvg from '@ant-design/icons-svg/lib/asn/AdditemTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AdditemTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AdditemTwoTone: AdditemTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AdditemTwoToneSvg}></AntdIcon>;
};

AdditemTwoTone.displayName = 'AdditemTwoTone';
AdditemTwoTone.inheritAttrs = false;
export default AdditemTwoTone;