// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeTrendUpBulkSvg from '@ant-design/icons-svg/lib/asn/HomeTrendUpBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeTrendUpBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeTrendUpBulk: HomeTrendUpBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeTrendUpBulkSvg}></AntdIcon>;
};

HomeTrendUpBulk.displayName = 'HomeTrendUpBulk';
HomeTrendUpBulk.inheritAttrs = false;
export default HomeTrendUpBulk;