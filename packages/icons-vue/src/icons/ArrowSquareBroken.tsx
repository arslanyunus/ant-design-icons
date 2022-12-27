// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareBroken: ArrowSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareBrokenSvg}></AntdIcon>;
};

ArrowSquareBroken.displayName = 'ArrowSquareBroken';
ArrowSquareBroken.inheritAttrs = false;
export default ArrowSquareBroken;