// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MainComponentBulkSvg from '@ant-design/icons-svg/lib/asn/MainComponentBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MainComponentBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MainComponentBulk: MainComponentBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MainComponentBulkSvg}></AntdIcon>;
};

MainComponentBulk.displayName = 'MainComponentBulk';
MainComponentBulk.inheritAttrs = false;
export default MainComponentBulk;