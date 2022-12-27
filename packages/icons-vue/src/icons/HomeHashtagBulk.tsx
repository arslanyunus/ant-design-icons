// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeHashtagBulkSvg from '@ant-design/icons-svg/lib/asn/HomeHashtagBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeHashtagBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeHashtagBulk: HomeHashtagBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeHashtagBulkSvg}></AntdIcon>;
};

HomeHashtagBulk.displayName = 'HomeHashtagBulk';
HomeHashtagBulk.inheritAttrs = false;
export default HomeHashtagBulk;