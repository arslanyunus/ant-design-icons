// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Path2OutlineSvg from '@ant-design/icons-svg/lib/asn/Path2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Path2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Path2Outline: Path2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Path2OutlineSvg}></AntdIcon>;
};

Path2Outline.displayName = 'Path2Outline';
Path2Outline.inheritAttrs = false;
export default Path2Outline;