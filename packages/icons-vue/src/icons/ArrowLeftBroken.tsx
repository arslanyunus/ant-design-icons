// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeftBrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowLeftBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeftBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeftBroken: ArrowLeftBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeftBrokenSvg}></AntdIcon>;
};

ArrowLeftBroken.displayName = 'ArrowLeftBroken';
ArrowLeftBroken.inheritAttrs = false;
export default ArrowLeftBroken;