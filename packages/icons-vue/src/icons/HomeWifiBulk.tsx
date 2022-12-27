// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeWifiBulkSvg from '@ant-design/icons-svg/lib/asn/HomeWifiBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeWifiBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeWifiBulk: HomeWifiBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeWifiBulkSvg}></AntdIcon>;
};

HomeWifiBulk.displayName = 'HomeWifiBulk';
HomeWifiBulk.inheritAttrs = false;
export default HomeWifiBulk;