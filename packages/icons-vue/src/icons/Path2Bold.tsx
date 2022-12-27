// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Path2BoldSvg from '@ant-design/icons-svg/lib/asn/Path2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Path2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Path2Bold: Path2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Path2BoldSvg}></AntdIcon>;
};

Path2Bold.displayName = 'Path2Bold';
Path2Bold.inheritAttrs = false;
export default Path2Bold;