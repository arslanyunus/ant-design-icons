// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AttachSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/AttachSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AttachSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AttachSquareBroken: AttachSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AttachSquareBrokenSvg}></AntdIcon>;
};

AttachSquareBroken.displayName = 'AttachSquareBroken';
AttachSquareBroken.inheritAttrs = false;
export default AttachSquareBroken;