// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignRightTwoToneSvg from '@ant-design/icons-svg/lib/asn/AlignRightTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignRightTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignRightTwoTone: AlignRightTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignRightTwoToneSvg}></AntdIcon>;
};

AlignRightTwoTone.displayName = 'AlignRightTwoTone';
AlignRightTwoTone.inheritAttrs = false;
export default AlignRightTwoTone;