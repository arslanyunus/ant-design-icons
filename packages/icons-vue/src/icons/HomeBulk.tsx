// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeBulkSvg from '@ant-design/icons-svg/lib/asn/HomeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeBulk: HomeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeBulkSvg}></AntdIcon>;
};

HomeBulk.displayName = 'HomeBulk';
HomeBulk.inheritAttrs = false;
export default HomeBulk;