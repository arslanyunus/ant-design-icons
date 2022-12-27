// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Archive1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Archive1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Archive1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Archive1TwoTone: Archive1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Archive1TwoToneSvg}></AntdIcon>;
};

Archive1TwoTone.displayName = 'Archive1TwoTone';
Archive1TwoTone.inheritAttrs = false;
export default Archive1TwoTone;