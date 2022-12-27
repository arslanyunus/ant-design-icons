// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowBottomTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowBottomTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowBottomTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowBottomTwoTone: ArrowBottomTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowBottomTwoToneSvg}></AntdIcon>;
};

ArrowBottomTwoTone.displayName = 'ArrowBottomTwoTone';
ArrowBottomTwoTone.inheritAttrs = false;
export default ArrowBottomTwoTone;