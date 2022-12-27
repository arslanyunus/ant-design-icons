// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Edit2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Edit2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Edit2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Edit2TwoTone: Edit2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Edit2TwoToneSvg}></AntdIcon>;
};

Edit2TwoTone.displayName = 'Edit2TwoTone';
Edit2TwoTone.inheritAttrs = false;
export default Edit2TwoTone;