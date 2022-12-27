// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StarBulkSvg from '@ant-design/icons-svg/lib/asn/StarBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StarBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StarBulk: StarBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarBulkSvg}></AntdIcon>;
};

StarBulk.displayName = 'StarBulk';
StarBulk.inheritAttrs = false;
export default StarBulk;