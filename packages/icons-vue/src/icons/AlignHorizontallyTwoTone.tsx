// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignHorizontallyTwoToneSvg from '@ant-design/icons-svg/lib/asn/AlignHorizontallyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignHorizontallyTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignHorizontallyTwoTone: AlignHorizontallyTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignHorizontallyTwoToneSvg}></AntdIcon>;
};

AlignHorizontallyTwoTone.displayName = 'AlignHorizontallyTwoTone';
AlignHorizontallyTwoTone.inheritAttrs = false;
export default AlignHorizontallyTwoTone;