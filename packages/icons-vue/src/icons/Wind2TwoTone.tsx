// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wind2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Wind2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wind2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wind2TwoTone: Wind2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wind2TwoToneSvg}></AntdIcon>;
};

Wind2TwoTone.displayName = 'Wind2TwoTone';
Wind2TwoTone.inheritAttrs = false;
export default Wind2TwoTone;