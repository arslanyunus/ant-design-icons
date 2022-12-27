// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeTrendDownBulkSvg from '@ant-design/icons-svg/lib/asn/HomeTrendDownBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeTrendDownBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeTrendDownBulk: HomeTrendDownBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeTrendDownBulkSvg}></AntdIcon>;
};

HomeTrendDownBulk.displayName = 'HomeTrendDownBulk';
HomeTrendDownBulk.inheritAttrs = false;
export default HomeTrendDownBulk;