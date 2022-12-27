// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleLeftBoldSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleLeftBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleLeftBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleLeftBold: ArrowCircleLeftBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleLeftBoldSvg}></AntdIcon>;
};

ArrowCircleLeftBold.displayName = 'ArrowCircleLeftBold';
ArrowCircleLeftBold.inheritAttrs = false;
export default ArrowCircleLeftBold;