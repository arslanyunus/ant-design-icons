// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoreSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoreSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoreSquareTwoTone: MoreSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreSquareTwoToneSvg}></AntdIcon>;
};

MoreSquareTwoTone.displayName = 'MoreSquareTwoTone';
MoreSquareTwoTone.inheritAttrs = false;
export default MoreSquareTwoTone;