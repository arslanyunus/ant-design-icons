// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloseSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/CloseSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloseSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloseSquareBroken: CloseSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseSquareBrokenSvg}></AntdIcon>;
};

CloseSquareBroken.displayName = 'CloseSquareBroken';
CloseSquareBroken.inheritAttrs = false;
export default CloseSquareBroken;