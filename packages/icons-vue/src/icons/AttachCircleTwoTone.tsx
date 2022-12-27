// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AttachCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/AttachCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AttachCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AttachCircleTwoTone: AttachCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AttachCircleTwoToneSvg}></AntdIcon>;
};

AttachCircleTwoTone.displayName = 'AttachCircleTwoTone';
AttachCircleTwoTone.inheritAttrs = false;
export default AttachCircleTwoTone;