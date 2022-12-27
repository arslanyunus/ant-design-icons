// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignLeftTwoToneSvg from '@ant-design/icons-svg/lib/asn/AlignLeftTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignLeftTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignLeftTwoTone: AlignLeftTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignLeftTwoToneSvg}></AntdIcon>;
};

AlignLeftTwoTone.displayName = 'AlignLeftTwoTone';
AlignLeftTwoTone.inheritAttrs = false;
export default AlignLeftTwoTone;