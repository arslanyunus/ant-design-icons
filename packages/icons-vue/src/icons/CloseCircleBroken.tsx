// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloseCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/CloseCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloseCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloseCircleBroken: CloseCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseCircleBrokenSvg}></AntdIcon>;
};

CloseCircleBroken.displayName = 'CloseCircleBroken';
CloseCircleBroken.inheritAttrs = false;
export default CloseCircleBroken;