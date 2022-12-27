// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AttachSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/AttachSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AttachSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AttachSquareTwoTone: AttachSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AttachSquareTwoToneSvg}></AntdIcon>;
};

AttachSquareTwoTone.displayName = 'AttachSquareTwoTone';
AttachSquareTwoTone.inheritAttrs = false;
export default AttachSquareTwoTone;