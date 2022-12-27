// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PathSquareBulkSvg from '@ant-design/icons-svg/lib/asn/PathSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PathSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PathSquareBulk: PathSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PathSquareBulkSvg}></AntdIcon>;
};

PathSquareBulk.displayName = 'PathSquareBulk';
PathSquareBulk.inheritAttrs = false;
export default PathSquareBulk;