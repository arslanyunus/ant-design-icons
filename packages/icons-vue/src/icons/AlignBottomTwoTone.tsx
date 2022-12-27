// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignBottomTwoToneSvg from '@ant-design/icons-svg/lib/asn/AlignBottomTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignBottomTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignBottomTwoTone: AlignBottomTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignBottomTwoToneSvg}></AntdIcon>;
};

AlignBottomTwoTone.displayName = 'AlignBottomTwoTone';
AlignBottomTwoTone.inheritAttrs = false;
export default AlignBottomTwoTone;