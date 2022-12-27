// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleLeftBrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleLeftBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleLeftBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleLeftBroken: ArrowCircleLeftBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleLeftBrokenSvg}></AntdIcon>;
};

ArrowCircleLeftBroken.displayName = 'ArrowCircleLeftBroken';
ArrowCircleLeftBroken.inheritAttrs = false;
export default ArrowCircleLeftBroken;