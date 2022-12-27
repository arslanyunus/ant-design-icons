// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AttachCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/AttachCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AttachCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AttachCircleBroken: AttachCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AttachCircleBrokenSvg}></AntdIcon>;
};

AttachCircleBroken.displayName = 'AttachCircleBroken';
AttachCircleBroken.inheritAttrs = false;
export default AttachCircleBroken;