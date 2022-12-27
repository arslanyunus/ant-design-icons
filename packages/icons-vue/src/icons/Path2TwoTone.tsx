// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Path2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Path2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Path2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Path2TwoTone: Path2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Path2TwoToneSvg}></AntdIcon>;
};

Path2TwoTone.displayName = 'Path2TwoTone';
Path2TwoTone.inheritAttrs = false;
export default Path2TwoTone;