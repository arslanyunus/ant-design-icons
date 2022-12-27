// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareLeftBrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareLeftBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareLeftBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareLeftBroken: ArrowSquareLeftBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareLeftBrokenSvg}></AntdIcon>;
};

ArrowSquareLeftBroken.displayName = 'ArrowSquareLeftBroken';
ArrowSquareLeftBroken.inheritAttrs = false;
export default ArrowSquareLeftBroken;