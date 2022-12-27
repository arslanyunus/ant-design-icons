// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AttachCircleBoldSvg from '@ant-design/icons-svg/lib/asn/AttachCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AttachCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AttachCircleBold: AttachCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AttachCircleBoldSvg}></AntdIcon>;
};

AttachCircleBold.displayName = 'AttachCircleBold';
AttachCircleBold.inheritAttrs = false;
export default AttachCircleBold;