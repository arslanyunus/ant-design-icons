// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Arrow3TwoToneSvg from '@ant-design/icons-svg/lib/asn/Arrow3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Arrow3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Arrow3TwoTone: Arrow3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Arrow3TwoToneSvg}></AntdIcon>;
};

Arrow3TwoTone.displayName = 'Arrow3TwoTone';
Arrow3TwoTone.inheritAttrs = false;
export default Arrow3TwoTone;